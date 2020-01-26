export function postCall(body) {
    fetch('http://172.30.10.152:5000/api/shower', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body
    })
}