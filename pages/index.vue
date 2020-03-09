<template>
  <div>
    <div class="form">
      <add-form />
    </div>
    <div class="todo">
      <todo />
    </div>
  </div>
</template>

<script>
  import AddForm from '~/components/AddForm'
  import Todo from '~/components/Todo'

  export default {
    components: {
     AddForm, Todo
    },
  }
</script>
