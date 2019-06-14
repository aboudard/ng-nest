export class Todo {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly active: boolean;
}
export const mockTodos: Todo[] = [
  {
    id: 1,
    title: 'new todo',
    description: 'another one bites the dust',
    active: true
  },
  {
    id: 2,
    title: 'other todo',
    description: 'this is the sound of C',
    active: false
  }
];
