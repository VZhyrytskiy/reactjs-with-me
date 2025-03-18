// if/else

// ?: 
// &&
// || 
// ?? 

function ConditionalRendering() {
  const isLoggedIn = true;
//   const name = 'Vitaliy';
  const name = null;
  const count = 1;

    // if (isLoggedIn) {
    //     return <div>Welcome {name ? <span>{name}</span> : <span>User</span>}</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }


    if (isLoggedIn) {
        // return <div>Welcome {count ? <span>{name}</span> : null}</div>
        // return <div>Welcome {count && <span>{name}</span>}</div>
        // return <div>Welcome {count > 0 && <span>{name}</span>}</div>
        // return <div>Welcome {name || 'Anna'}</div>
        // return <div>Welcome {name ?? 'Anna'}</div>
    } else {
        return <div>Welcome Guest</div>
    }

}

export default ConditionalRendering;