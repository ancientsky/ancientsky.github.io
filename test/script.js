function showNext(nextId) {
    const current = document.querySelector('.node:not(.hidden)');
    const results = document.querySelectorAll('.result'); // 隱藏所有結果區
    results.forEach(result => result.classList.add('hidden'));

    if (current) {
        current.classList.add('hidden');
    }
    const next = document.getElementById(nextId);
    if (next) {
        next.classList.remove('hidden');
    }
}

function showResult(resultId) {
    const current = document.querySelector('.node:not(.hidden)');
    if (current) {
        current.classList.add('hidden');
    }
    const result = document.getElementById(resultId);
    if (result) {
        result.classList.remove('hidden');
    }
}

function resetFlow() {
    // 隱藏所有節點和結果
    const allNodes = document.querySelectorAll('.node');
    allNodes.forEach(node => {
        if (node.id !== 'start') { // 讓 'start' 節點保持可見
            node.classList.add('hidden');
        }
    });

    const allResults = document.querySelectorAll('.result');
    allResults.forEach(result => result.classList.add('hidden'));

    // 顯示起始節點
    document.getElementById('start').classList.remove('hidden');
}