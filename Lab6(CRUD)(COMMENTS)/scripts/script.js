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
            name: "Василий"
            ,caption: "Венеция"
            ,text: "Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
            ,time: "27/08/2017 06:34"
        }
        ,{
            name: "Валерий"
            ,caption: "Тур по Китаю"
            ,text: "Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
            ,time: "05/09/2017 20:04"
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
        <h4>Имя: '  + this.data[i].name + '</h4>\
        <h5>' + this.data[i].time + '</h5>\
        <h2>'  + this.data[i].caption + '</h2>\
        <h3>' + this.data[i].text + '</h3>\
        ';
        c.innerHTML = t;

        var btnDel = dom.create('input');
        btnDel.type = 'button';
        btnDel.className = 'btn-del';
        btnDel.innerHTML = '-';
        btnDel.addEventListener('click', () => this.delete(i));
        c.appendChild(btnDel);

        var btnEdit = dom.create('input');
        btnEdit.type = 'button';
        btnEdit.className = 'btn-edit';
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
        
        var inp = dom.create('input');
        inp.type = 'text';
        inp.id = 'txtTxt';
        a.appendChild(inp);


        var btnAdd = dom.create('input');
        btnAdd.type = 'button';
        btnAdd.className = 'btn-add';
        btnAdd.innerHTML = '-';


        btnAdd.addEventListener('click', () => {
            var now = new Date();
            var check = (v) => {
                for (i = 0; i < 10; i++){
                    if (v == i){
                        return 0 + "" + v;
                    }
                }
                return v;
            }
            this.data.push({
                name: dom.id("txtN").value
                ,caption: dom.id("txtTt").value
                ,text: dom.id("txtTxt").value
                ,time: check(now.getDate()) + "/" +  check(now.getMonth()) + "/" + now.getFullYear() + " " + check(now.getHours()) + ":" + check(now.getMinutes())
            })
            this.render();
            this.add();
        });

        a.appendChild(btnAdd);

        this.root.querySelector('.row').appendChild(b);
    }

    ,edit: function(i){
        this.root.querySelector('.tx').innerHTML = '';
        var inp = dom.create('input');
        inp.type = 'text';
        inp.id = 'txtN';
        this.root.querySelector('.tx').appendChild(inp);

        var inp = dom.create('input');
        inp.type = 'text';
        inp.id = 'txtTt';
        this.root.querySelector('.tx').appendChild(inp);
        
        var inp = dom.create('input');
        inp.type = 'text';
        inp.id = 'txtTxt';
        this.root.querySelector('.tx').appendChild(inp);

        var btnAdd = dom.create('input');
        btnAdd.type = 'button';
        btnAdd.className = 'btn-add';
        btnAdd.innerHTML = '-';

        btnAdd.addEventListener('click', () => {
            var now = new Date();
            var check = (v) => {
                for (i = 0; i < 10; i++){
                    if (v == i){
                        return 0 + "" + v;
                    }
                }
                return v;
            }
            this.data.push({
                name: dom.id("txtN").value
                ,caption: dom.id("txtTt").value
                ,text: dom.id("txtTxt").value
                ,time: check(now.getDate()) + "/" +  check(now.getMonth()) + "/" + now.getFullYear() + " " + check(now.getHours()) + ":" + check(now.getMinutes())
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
