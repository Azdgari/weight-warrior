import colors from './colors';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

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

  newExerciseModal: {
    backgroundColor: colors.background,
    height: '100%',
  },

  inputTitles: {
    color: colors.text,
    fontSize: 22,
    fontWeight: 'bold',
  },

  inputContainer: {
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 10,
  },

  nameInput: {
    color: colors.text,
    backgroundColor: colors.textEntryBackground,
    borderColor: colors.text,
    height: 80,
    borderWidth: 2,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 24,
  },

  input: {
    color: colors.text,
    backgroundColor: colors.textEntryBackground,
    borderColor: colors.text,
    height: 50,
    width: '75%',
    borderWidth: 2,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  numericalInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  chooseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
    borderRadius: 4,
    elevation: 3,
  },

  chooseButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  // Timer

  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.background,
    padding: 8,
  },

  editTimerButton: {
    color: 'white',
    marginTop: 50,
  },
});

export default styles;
