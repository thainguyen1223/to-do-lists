import html from "../core.js";
import Todoitem from "./TodoItem.js";
import {connect} from "../store.js"

const connector=connect()

function TodoList({todos ,filters , filter}) {
  
  return html`

      <section class="main">
        <input 
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox" 
        onchange="dispatch('toggleAll', this.checked)"
        ${todos.every(filters.completed) &&'checked'}
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          ${todos.filter(filters[filter]).map((todo ,index)=> Todoitem({todo ,index}))}
         
        </ul>
      </section>
   
  `;
}

export default connector(TodoList)
