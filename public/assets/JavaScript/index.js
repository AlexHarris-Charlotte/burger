window.onload = function () {
    const createButton = document.querySelector("#createBurger");
    createButton.addEventListener('click', addBurger);

    const eatButtons = document.querySelectorAll(".readyButtons");
    eatButtons.forEach( (button) => {
        button.addEventListener('click', devourBurger);
    });


    function addBurger() {
        const newBurgerName = document.querySelector("#burgerName").value.trim();
        if (newBurgerName.length > 0) {
            console.log(newBurgerName);
            const data = {
                name: newBurgerName
            }
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/burgers', true);
            xhr.onload = function() {
                if (this.status === 200) {
                    console.log(this.responseText);
                }
            }
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send(JSON.stringify(data));
            location.reload();
        }
    }

    function devourBurger() {
        // can probably refactor this
        const previousSib = this.previousElementSibling.childNodes[0].parentNode.attributes.data.nodeValue;
        console.log(this.previousElementSibling.childNodes[0].parentNode.attributes.data.nodeValue);
        const data = {
            burgerUpdateId: previousSib
        };
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', '/api/burgers/update', true);
        xhr.onload = function() {
            if (this.status === 200) {
                console.log(this.responseText)
            }
        }
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
        location.reload();  
    }

};
