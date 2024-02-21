import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
  },
  topContainer: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  discountCodeWrapper: {
    marginVertical: 24,
    padding: 10,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: Colors.textLight,
  },
  discountleftWrapper: {
    flexDirection: 'row',
    marginLeft: 12,
    alignItems: 'center',
  },
  discountText: {
    marginLeft: 16,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  percentageIcon: {
    padding: 8,
    backgroundColor: Colors.lightYellow,
    borderRadius: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
  },
  paymentSection: {
    marginHorizontal: 16,
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalPrice: {
    color: Colors.orange,
    marginRight: 8,
    fontSize: 16,
  },
  paymentLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  payment: {
    padding: 15,
    backgroundColor: Colors.orange,
    borderRadius: 20,
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentText: {
    color: 'white',
  },
});
export default styles;
