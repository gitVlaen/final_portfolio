$(function() {
    new fullpage("#container", {
        verticalCentered: false,
        scrollBar: true,
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
        menu: '.side_nav',
        scrollingSpeed: 1500
    });
});