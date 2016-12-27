(function() {
    'use strict';

    var addTodoBtn = document.getElementById('add_todo');
    var comment = document.getElementById('comment');
    var todoArea = document.getElementById('todo_area');
    var todos = {};
    var idNumber = 1;

    function generateId() {
        idNumber += 1;

        return 'todo_' + idNumber;
    }

    function addTodo(comment) {
        var todo = document.createElement('li');
        var id = generateId();

        todo.id = id;
        todo.innerHTML = comment + '&nbsp;<button class="remove_todo">삭제</button>';
        todoArea.appendChild(todo);

        todos[id] = todo;
    }

    addTodoBtn.addEventListener('click', function() {
        addTodo(comment.value);
    });

    todoArea.addEventListener('click', function(e) {
        var target = e.target;

        if (target.className === 'remove_todo') {
            todoArea.removeChild(target.parentNode);
        }
    });
})();
