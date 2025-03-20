import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButtonCompletely: {
    marginLeft: 16,
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButtonPending: {
    marginLeft: 16,
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
