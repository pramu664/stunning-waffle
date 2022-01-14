const scale = 1.5;
const url = 'sample.pdf';

let pdfDoc = null;
let pageRendering = false;
let pageNumPending = null;
let pageNum = 1;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

pdfjsLib.getDocument(url).promise.then(pdf => {
    pdfDoc = pdf;
    console.log(pdfDoc);

    document.getElementById('pageCount').innerText = pdfDoc.numPages;
    renderPage(pageNum)
    pdfDoc.getOutline().then(toc => {
        toc.forEach(toc => {
            const title = toc.title;
            const divEl = document.createElement('div');
            divEl.innerText = title;
            document.querySelector('.menu').append(divEl);
        })
    })
})
    .catch(err => {
        const elDiv = document.createElement('div');
        elDiv.innerText = `${err.message}`;
        elDiv.className = 'error';
        document.querySelector('body').insertBefore(elDiv, canvas);
        document.querySelector('.navBar').style.display = 'none';
        document.querySelector('.menu').style.display = 'none';
    })


function renderPage(pageNum) {
    pageRendering = true;
    pdfDoc.getPage(pageNum).then(page => {
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        }

        const renderTask = page.render(renderContext);
        renderTask.promise.then(() => {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        })

        document.getElementById('pageNum').innerText = pageNum;

    });
}

function queueRender(pageNum) {
    if (pageRendering) {
        pageNumPending = pageNum;
    } else {
        renderPage(pageNum);
    }

}

function prev() {
    if (pageNum <= 1) {
        return
    } else {
        pageNum--;
        queueRender(pageNum);
    }
}

function next() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    } else {
        pageNum++;
        queueRender(pageNum);
    }
}

document.getElementById('prev').addEventListener('click', prev);
document.getElementById('next').addEventListener('click', next);