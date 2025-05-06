document.getElementById('agree').addEventListener('click', function() {
    document.getElementById('chat-interface').style.display = 'block';
});

document.getElementById('disagree').addEventListener('click', function() {
    alert('You must agree to the terms to use TextBuddy.');
});
