import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import React from 'react'
import { styles } from './style'
import Item from '../../components/item'

interface Task {
  id: string
  title: string
  checked: boolean
}

export function Home() {
  const [tasks, setTasks] = React.useState<Task[]>([
    { id: '1', title: 'Exemplo task 1', checked: false },
  ])
  const [taskTitle, setTaskTitle] = React.useState('')

  const filteredTasksCompletely = tasks.filter((task) => task.checked === true)

  const filteredTasksPending = tasks.filter((task) => task.checked === false)

  function handleAddTask() {
    if (tasks.some((task) => task.title === taskTitle)) {
      return Alert.alert('Task já existente', 'Essa task ja existe na lista')
    }
    if (taskTitle === '') {
      Alert.alert('Task vazia', 'Por favor, preencha o campo da task')
      return
    }
    const newTask = {
      id: String(Math.random() * 1000),
      title: taskTitle,
      checked: false,
    }

    setTasks([...tasks, newTask])
    setTaskTitle('')
  }

  function handleCheckItem(taskId: string) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    )
  }
  function handleRemoveTask(taskId: string) {
    Alert.alert('Remover task', `deseja realmente remover esta task?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        onPress: () => setTasks(tasks.filter((task) => task.id !== taskId)),
      },
    ])
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.introductText}>Bem vindo ao meu To-do List!!</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Insira o nome da task"
            placeholderTextColor="white"
            onChangeText={setTaskTitle}
            value={taskTitle}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tasksContainerPending}>
          <Text style={styles.pendingTasks}>
            Tasks pendentes: {filteredTasksPending.length}
          </Text>

          <FlatList
            data={filteredTasksPending}
            keyExtractor={(task) => task.id}
            renderItem={(task) => (
              <Item
                title={task.item.title}
                checkBox={task.item.checked}
                onCheck={() => handleCheckItem(task.item.id)}
                onRemove={() => handleRemoveTask(task.item.id)}
              />
            )}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>Nenhuma task pendente</Text>
            )}
          />
        </View>

        <View style={styles.tasksContainerRecived}>
          <Text style={styles.recivedTasks}>
            Tasks já realizadas: {filteredTasksCompletely.length}
          </Text>

          <FlatList
            data={filteredTasksCompletely}
            keyExtractor={(task) => task.id}
            renderItem={(task) => (
              <Item
                title={task.item.title}
                checkBox={task.item.checked}
                onCheck={() => handleCheckItem(task.item.id)}
                onRemove={() => handleRemoveTask(task.item.id)}
              />
            )}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>Nenhuma task completa</Text>
            )}
          />
        </View>
      </View>
    </>
  )
}
