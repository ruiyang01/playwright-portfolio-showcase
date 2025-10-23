import {test} from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('CRUD basics on TodoMVC', async({page}) => {
    const todo = new TodoPage(page);
    await todo.goto();
    await todo.addTodo('Buy milk');
    await todo.addTodo('Walk dog');
    await todo.toggleFirst();
    await todo.deleteFirst();
    await todo.expectCount(1);
})