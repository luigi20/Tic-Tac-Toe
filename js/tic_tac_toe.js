const tic_tac_toe = {
    board: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    simbols: ['X', 'O'],
    container_element: null,
    init: function (container) {
        this.container_element = container;
    },

    draw: function () {
        let content = "";
        for (l in this.board) {
            content += "<div>" + l + "</div>";
        }
        this.container_element.innerHTML = content;
    }
};