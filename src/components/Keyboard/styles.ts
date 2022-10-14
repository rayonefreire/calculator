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
    fontSize: 34,
    color: 'white',
  },
  buttonOperation: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    margin: 8,
  },
  number: {
    fontSize: 40,
    color: 'purple',
  },
  result: {
    fontSize: 80,
    color: 'white',
  },
});