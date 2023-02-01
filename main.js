function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}



function isOrthogonal(v1, v2) {
    return dot_product(v1, v2) === 0;
}

function determineOrthogonality(vectors) {
    let results = [];
    for (let i = 0; i < vectors.length; i++) {
        for (let j = i + 1; j < vectors.length; j++) {
            results.push({
                pair: [vectors[i], vectors[j]],
                orthogonal: isOrthogonal(vectors[i], vectors[j])
            });
        }
    }
    return results;
}