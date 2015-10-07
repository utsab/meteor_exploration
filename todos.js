Router.route('/register');
Router.route('/login');
Router.route('/', {
  'template': 'home'
});

Todos = new Meteor.Collection('todos');

if (Meteor.isClient) {
  Template.todos.helpers({
    'todo': function() {
      return Todos.find();
    }
  });

  Template.todoItem.helpers({
    'checked' : function() {
      if (this.completed) {
        return "checked";
      } else {
        return "";
      }
    }
  });

  Template.summary.helpers({
    'totalCompleted' : function() {
      return Todos.find({completed: true}).count();
    },
    'totalTasks' : function() {
      return Todos.find().count();
    }
  });

  Template.addTodo.events({
    'submit form': function (e) {
      e.preventDefault();
      var todoName = $('[name="todoName"]').val();
      Todos.insert({
        name: todoName,
        completed: false,
        createdAt: new Date()
      });

      $('[name="todoName"]').val('');
    }
  });

  Template.todoItem.events({
    'click .todo-delete': function(e) {
      e.preventDefault();
      debugger
      var taskId = this._id;
      Todos.remove({_id: taskId});
    },
    'change [type="checkbox"]': function(e) {
      console.log("checked or unchecked checkbox");
      if (this.completed) {
        Todos.update({ _id: this._id },{ $set: { completed:false} });
      } else {
        Todos.update({ _id: this._id },{ $set: { completed:true} });
      }
    }
  });

}

if (Meteor.isServer) {

}
