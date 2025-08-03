document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('task-list');
  const addTaskBtn = document.getElementById('add-task-button');
  const taskInput = document.getElementById('task-input');
  const currentDateEl = document.getElementById('current-date');
  const prevDayBtn = document.getElementById('prev-day');
  const nextDayBtn = document.getElementById('next-day');
  const progressEl = document.getElementById('progress-display');

  let selectedDate = new Date();

  // Pomocné funkce pro localStorage
  function getFormattedDateKey(date) {
    return date.toISOString().split('T')[0]; // "YYYY-MM-DD"
  }

  function saveTasksForDate(date, tasks) {
    const key = getFormattedDateKey(date);
    localStorage.setItem(key, JSON.stringify(tasks));
  }

  function loadTasksForDate(date) {
    const key = getFormattedDateKey(date);
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  // Uloží aktuální úkoly na vybraný den
  function saveCurrentTasks() {
    const tasks = [];
    const items = taskList.querySelectorAll('li');
    items.forEach(li => {
      const text = li.querySelector('span').textContent;
      const done = li.classList.contains('done');
      tasks.push({ text, done });
    });
    saveTasksForDate(selectedDate, tasks);
  }

  // Načte úkoly z localStorage a vykreslí je
  function loadTasks() {
    taskList.innerHTML = '';
    const tasks = loadTasksForDate(selectedDate);
    tasks.forEach(task => createTaskElement(task.text, task.done));
    updateProgress();
  }

  // DATUM - zobrazení a načítání úkolů
  function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateEl.textContent = selectedDate.toLocaleDateString('en-US', options);
    loadTasks();
  }

  prevDayBtn.addEventListener('click', () => {
    selectedDate.setDate(selectedDate.getDate() - 1);
    updateDateDisplay();
  });

  nextDayBtn.addEventListener('click', () => {
    selectedDate.setDate(selectedDate.getDate() + 1);
    updateDateDisplay();
  });

  // PROGRESS
  function updateProgress() {
    const allTasks = taskList.querySelectorAll('li');
    const doneTasks = taskList.querySelectorAll('li.done');
    const total = allTasks.length;
    const done = doneTasks.length;
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    progressEl.textContent = `Progress: ${percent}%`;
  }

  // NOVÝ ÚKOL s volitelným stavem hotovo
  function createTaskElement(taskText, done = false) {
    const li = document.createElement('li');
    if (done) li.classList.add('done');

    const checkbox = document.createElement('div');
    checkbox.className = 'task-checkbox';
    if (done) checkbox.classList.add('done');

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.className = 'delete-task-button';

    // Kliknutí na checkbox
    checkbox.addEventListener('click', () => {
      const isDone = checkbox.classList.toggle('done');
      li.classList.toggle('done');
      updateProgress();
      saveCurrentTasks();
      if (isDone) {
        triggerDuckAnimation();
      }
    });

    // Smazání úkolu
    deleteBtn.addEventListener('click', () => {
      li.remove();
      updateProgress();
      saveCurrentTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    updateProgress();
  }

  // Výchozí stav: input skrytý, tlačítko "New Task"
  addTaskBtn.textContent = 'New Task';
  taskInput.style.display = 'none';

  // TLAČÍTKO "New Task" / "Add"
  addTaskBtn.addEventListener('click', () => {
    if (taskInput.style.display === 'none' || taskInput.style.display === '') {
      // zobraz input a změní tlačítko na Add
      taskInput.style.display = 'inline-block';
      addTaskBtn.textContent = 'Add';
      taskInput.focus();
    } else {
      // přidat úkol, skrýt input, vrátit tlačítko na New Task
      const text = taskInput.value.trim();
      if (text !== '') {
        createTaskElement(text);
        saveCurrentTasks();
        taskInput.value = '';
      }
      taskInput.style.display = 'none';
      addTaskBtn.textContent = 'New Task';
    }
  });

  // INIT
  updateDateDisplay();
  updateProgress();
});