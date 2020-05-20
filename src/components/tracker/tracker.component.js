import React, { ReactDOM } from 'react';
import './tracker.styles.scss';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {
        task: '',
        complete: false,
      },
    };
  }

  handleChange(event) {
    const newValue = event.target.value;
    if (event !== undefined) {
      this.setState({
        newItem: {
          task: newValue,
        },
      });
    }
  }

  handleSubmit(event) {
    const newItem = this.state.newItem;

    if (newItem.task !== '') {
      console.log('hello');
      props.addItem(this.state.newItem);
      this.setState({
        newItem: {
          task: '',
        },
      });
    }
    refs.myForm.reset();
    event.preventDefault();
  }

  render() {
    return (
      <form ref="myForm" onSubmit={this.handleSubmit} className="todo__input">
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Add a task here..."
        />
        <button type="submit" className="btn btn-default">
          <i class="fas fa-plus" />
        </button>
      </form>
    );
  }
}

const TodoList = (props) => {
  const completed = [];
  const notComplete = props.list.filter((e, index) => {
    e.index = index;
    if (!e.complete) {
      return e;
    } else {
      completed.push(e);
    }
  });
  return (
    <div>
      <ul className="todo__list">
        {notComplete.map((el) => {
          return (
            <li className="todo__list__item">
              <p>{el.task}</p>
              <div className="todo__list__options">
                <span onClick={() => props.completeItem(el.index)}>
                  <i className="fas fa-check" />
                </span>
                <span onClick={() => props.removeItem(el.index)}>
                  <i className="fas fa-times" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <ul className="todo__list todo__list--completed">
        {completed.map((el) => {
          return (
            <li className="todo__list__item complete">
              <p>{el.task}</p>
              <span>
                <i className="fas fa-check" />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const TodoItem = (props) => {
  return (
    <li
      className={el.complete ? 'todo__list__item complete' : 'todo__list__item'}
    />
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: this.props.todoItems,
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
  }

  addItem(item) {
    let arr2 = [...this.state.list, item];

    this.setState(() => {
      return { list: arr2 };
    });
  }

  completeItem(index) {
    let arr2 = [...this.state.list];
    arr2[index].complete = true;
    this.setState(() => {
      return { list: arr2 };
    });
  }

  removeItem(index) {
    let newList = [...this.state.list];
    newList.splice(index, 1);
    this.setState(() => {
      return { list: newList };
    });
  }

  render() {
    return (
      <div className="todo">
        <TodoInput addItem={this.addItem} />
        <TodoList
          list={this.state.list}
          removeItem={this.removeItem}
          completeItem={this.completeItem}
        />
      </div>
    );
  }
}

ReactDOM.render(<App todoItems={todoItems} />, document.getElementById('app'));
