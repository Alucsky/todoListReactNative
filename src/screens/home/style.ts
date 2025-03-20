import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  introductText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 36,
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: 'white',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  pendingTasks: {
    marginBottom: 12,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  recivedTasks: {
    marginBottom: 12,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  tasksContainerPending: {
    padding: 16,
    backgroundColor: '#641616',
    borderRadius: 16,
    marginBottom: 12,
    maxHeight: 300,
  },
  tasksContainerRecived: {
    padding: 16,
    backgroundColor: '#16641e',
    borderRadius: 16,
    maxHeight: 300,
  },
  emptyListText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
})
