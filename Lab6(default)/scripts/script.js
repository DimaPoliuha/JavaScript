  /* DOM */

  var dom = function(){
    return{
        id: (id) => document.getElementById(id)
        ,q: (selector) => document.querySelector(selector)
        ,create:  (tag) => document.createElement(tag)
        ,add: (parent, child) => parent.appendChild(child)
    }
}();

function Comments(id){
    this.id = id;
    this.root = dom.id(id);

    this.data = [
        {   
            name: "Олег"
            ,caption: "Отзыв"
            ,text: "Все понравилось!"
        }
        ,{
            name: "Евгений"
            ,caption: "Плохой отзыв"
            ,text: "Все ужасно!!!"
        }
    ];
}

Comments.prototype = {
    render: function(){
        this.root.innerHTML = `<div class="row"></div>`;
        
        this.data.forEach(
        (item, i) => this.renderItem(i)
        );
    }

    ,renderItem:  function(i){
        var d = dom.create('div');
        d.className = 'col';

        var c = dom.create('div');
        c.className = 'tx';

        var t = '\
        <h4>'  + this.data[i].name + '</h4>\
        <h2>'  + this.data[i].caption + '</h2>\
        <h3>' + this.data[i].text + '</h3>\
        ';
        c.innerHTML = t;

        var btnDel = dom.create('input');
        btnDel.type = 'button';
        btnDel.className = 'btn-del btn';
        btnDel.innerHTML = '-';
        btnDel.addEventListener('click', () => this.delete(i));
        c.appendChild(btnDel);

        var btnEdit = dom.create('input');
        btnEdit.type = 'button';
        btnEdit.className = 'btn-edit btn';
        btnEdit.innerHTML = '-';
        btnEdit.addEventListener('click', () => this.edit(i));
        c.appendChild(btnEdit);

        d.appendChild(c);

        this.root.querySelector('.row').appendChild(d);
    }

    ,delete:  function(i){
        console.log('delete ' + i);
        this.data.splice(i,1);
        this.render();
        this.add();
    }

    ,add: function(){
        var b = dom.create('div');
        b.className = 'col';

        var a = dom.create('div');
        a.className = 'tx';

        b.appendChild(a);

        var t = '\
        <h4>Имя: </h4>\
        <h2>Заголовок: </h2>\
        <h2></h2>\
        <h3>Текст: </h3>\
        ';
        a.innerHTML = t;

        var inp = dom.create('input');
        inp.type = 'text';
        inp.id = 'txtN';
        a.appendChild(inp);

        var inp = dom.create('input');
        inp.type = 'text';
        inp.id = 'txtTt';
        a.appendChild(inp);
        
        var inp = dom.create('textarea');
        inp.type = 'text';
        inp.id = 'txtTxt';
        a.appendChild(inp);


        var btnAdd = dom.create('input');
        btnAdd.type = 'button';
        btnAdd.className = 'btn-add btn';
        btnAdd.innerHTML = '-';


        btnAdd.addEventListener('click', () => {
            this.data.push({
                name: dom.id("txtN").value
                ,caption: dom.id("txtTt").value
                ,text: dom.id("txtTxt").value
            })
            this.render();
            this.add();
        });

        a.appendChild(btnAdd);

        this.root.querySelector('.row').appendChild(b);
    }

    ,edit: function(i){
        this.root.querySelector('.tx').innerHTML = `<br><br><br><br><br><br><br><br>`;
        var inp = dom.create('input');
        inp.type = 'text';
        inp.id = 'txtN';
        inp.value = this.data[i].name;
        this.root.querySelector('.tx').appendChild(inp);

        var inp = dom.create('input');
        inp.type = 'text';
        inp.id = 'txtTt';
        inp.value = this.data[i].caption;
        this.root.querySelector('.tx').appendChild(inp);
        
        var inp = dom.create('textarea');
        inp.type = 'text';
        inp.id = 'txtTxt';
        inp.value = this.data[i].text;
        this.root.querySelector('.tx').appendChild(inp);

        var btnAdd = dom.create('input');
        btnAdd.type = 'button';
        btnAdd.className = 'btn-add btn';
        btnAdd.innerHTML = '-';

        btnAdd.addEventListener('click', () => {
            this.data.push({
                name: dom.id("txtN").value
                ,caption: dom.id("txtTt").value
                ,text: dom.id("txtTxt").value
            })
            this.delete(this.i);
            this.render();
            this.add();
        });

        this.root.querySelector('.tx').appendChild(btnAdd);
    }

};

/* Draw comments */

var comments = new Comments('container');
comments.render();
comments.add();
