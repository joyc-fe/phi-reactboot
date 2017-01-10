Pace.start({
    ajax: false,
});
Pace.on('done', () => {
    document.getElementById('topLine') && (document.getElementById('topLine').style.visibility = 'visible');
});