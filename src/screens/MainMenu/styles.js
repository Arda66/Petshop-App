import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    color: Colors.orange,
    fontSize: 28,
    fontWeight: 'bold',
  },
  topContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    marginLeft: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 24,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    borderWidth: 0,
    color: 'black',
  },
  searchIcon: {
    marginLeft: 10,
  },
  subTitle: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  midBottomWrapper: {
    borderTopWidth: 0.7,
    borderTopColor: Colors.textLight,
    marginTop: 16,
    backgroundColor: Colors.lightBackground,
  },
});

export default styles;
