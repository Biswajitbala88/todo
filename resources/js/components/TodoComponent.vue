<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 mt-3">
                <div class="card">
                    <div class="card-header">Todo list</div>

                    <div class="card-body">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter todo...">
                            <button class="btn btn-success" type="submit">Add</button>
                        </div>
                        <div class=" mt-3">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Doe</td>
                                    <td>
                                        <button class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>





<script>
import axios from 'axios'

export default {
    name: 'App',
    data() {
        return {
            todos: [],
           
        }
    },
    mounted() {
        // console.log('Page mounted');
        this.getListtodo();
    },
    methods: {
        getListtodo() {
            axios.get('http://127.0.0.1:8000/api/todos').then(res => {
                this.todos = res.data.todos
                console.log(this.todos);

         
            });
        }
    }
}
</script>