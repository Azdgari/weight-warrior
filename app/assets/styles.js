import colors from './colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  items: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  exerciseWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.textEntryBackground,
    padding: 20,
    gap: 15,
  },

  // Inside exerciseWrapper
  exercise: {
    color: colors.text,
    flex: 2,
    fontSize: 24,
    fontWeight: 'bold',
  },

  weight: {
    color: colors.text,
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
  },

  repsContainer: {
    flexDirection: 'column',
    gap: 15,
  },

  // Inside repsContainer
  reps: {
    color: colors.text,
    fontSize: 20,
  },

  sets: {
    color: colors.text,
    fontSize: 20,
  },

  sectionTitle: {
    fontSize: 32,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  // New Entry Modal
  inputContainer: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
  },
});

export default styles;
