import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  potBall( ball ){
    console.log('potBall', ball);
    dispatch({
      actionType: AppConstants.POT_BALL, ball
    });
  },
  foul( penalty ){
    console.log('foul', penalty);
    dispatch({
      actionType: AppConstants.FOUL, penalty
    });
  },
  changePlayer (){
    console.log('changePlayer');
    dispatch({
      actionType: AppConstants.CHANGE_PLAYER
    });
  }
};
