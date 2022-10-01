import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  header: {
    marginTop: 100,
    marginLeft: 24,
  },
  keyboard: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 70,
  },
  fileira: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  buttonOperation: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  buttonZero: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  number: {
    fontSize: 40,
    color: 'white',
  },
  operation: {
    fontSize: 60,
    color: 'purple'
  }
});