import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  btnContainer: {
    width: 365,
    height: 54,
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: '#0EBE7F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnText:{
    color: '#FFF',
    fontWeight: '500',
    fontSize: 18,
    fontStyle: 'normal',
    letterSpacing: -0.3,
  },
  imgBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -0.3,
  },
  headerDescription:{
    color: '#677294',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: -0.3,
    paddingVertical: 10
  },
  socialBtnContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: 160,
    borderRadius: 12,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.06,
    shadowRadius: 22,
    elevation: 1, // Cette propriété est utilisée pour l'ombre sur Android
  },
  socialBtnText: {
    marginStart: 5,
    color: '#677294',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: -0.3,
  },
  bigInputContainer: {
    backgroundColor: '#FFF',
    borderColor: 'rgba(103, 114, 148, 0.16)',
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15, // Ajustez cet espace intérieur selon vos besoins
    width: '90%',
    height: 80,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: 'rgba(103, 114, 148, 0.16)',
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15, // Ajustez cet espace intérieur selon vos besoins
    width: '90%',
    height: 60,
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputContainerEditableText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%', // Utilisez '100%' pour couvrir toute la hauteur du conteneur
    color: '#000',
  },  
  icon: {
    marginRight: 10,
  },
  linkText:{
    color: '#0EBE7F',
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: -0.3,
    paddingVertical: 15
  },
  EllipseBackgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
    position: 'absolute',
    bottom: 0, 
    right: 0 ,
  },
  flexColumnContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0EBE7F',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingBottom: 30,
  },
  btnBackContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 5,
  },
  textWhite: {
    color: '#FFF',
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: -0.3,
  },  
  profileImg: {
    width: 100, // Ajoutez la largeur souhaitée
    height: 100, // Ajoutez la hauteur souhaitée
    borderRadius: 50, // La moitié de la largeur ou de la hauteur pour obtenir un effet d'avatar
  }
});