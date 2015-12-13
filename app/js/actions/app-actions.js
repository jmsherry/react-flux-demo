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
  changePlayer(){
    console.log('changePlayer');
    dispatch({
      actionType: AppConstants.CHANGE_PLAYER
    });
  },
  endFrame(playerid){
    console.log('endFrame');
    dispatch({
      actionType: AppConstants.END_FRAME, playerid
    });
  },
  endGame(){
    console.log('endGame');
    dispatch({
      actionType: AppConstants.END_GAME
    });
  }
};
