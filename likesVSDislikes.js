// Story
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.



// Like, Dislike, Nothing come from Preloaded
function likeOrDislike(buttons) {
    console.log(buttons)
  let last=buttons[0];
    let result = ''
    for(let i = 1; i < buttons.length; i++){
      if(buttons[i] == last){
        last = 'Nothing'
      } else {
        last = buttons[i]
      }
    }
  return last ? last : 'Nothing';  
    
  }