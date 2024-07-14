   <script>
        document.getElementById('add-btn').addEventListener('click', function() {
            const taskText = document.getElementById('todo-input').value;
            if (taskText === '') return;

            const listItem = document.createElement('li');
            listItem.className = 'todo-item';
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button onclick="removeTask(this)">Remove</button>
            `;

            document.getElementById('todo-list').appendChild(listItem);
            document.getElementById('todo-input').value = '';
        });

        function removeTask(button) {
            button.parentElement.remove();
        }
    </script>
