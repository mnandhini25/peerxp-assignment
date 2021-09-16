export const getAuthourAndTags = (list) => {
    let obj = {
      authList: [],
      tagList:[]
    }
    
    let allAuthors = [];
    let allTags = [];
    list.map((post) => {
      allAuthors = [...allAuthors, ...post.authors];
      allTags = [...allTags, ...post.tags];
    });

    obj.authList = allAuthors.reduce((unique, o) => {
      if (!unique.some((obj) => obj.id === o.id)) {
        unique.push(o);
      }
      return unique;
    }, []);

    obj.tagList = allTags.reduce((unique, o) => {
      if (!unique.some((obj) => obj.id === o.id)) {
        unique.push(o);
      }
      return unique;
    }, []);

    return obj;
  };

  export const getOrderdPosts = (posts) => {
    return posts.sort(function(a, b) {
        var c = new Date(a.published_at);
        var d = new Date(b.published_at);
        return d-c;
    });
  }

  export const getChartData = (posts) => {
      let obj = {};
      let chartData = []

      posts.forEach(post => {
          const postMonth = new Date(post.published_at).toLocaleString('default', { month: 'long' }) + new Date(post.published_at).getFullYear().toString();
          console.log(postMonth)
          if(obj[postMonth] !== undefined )
            {
               obj[postMonth] =  obj[postMonth] + 1;    
            }else {
                obj[postMonth] = 1;
            } 
          
      });
      for (let key in obj) {
          chartData.push({month: key, posts: obj[key]})
      }
      console.log(obj, chartData)
      return chartData;
  }

  export const getFormattedCardList = (posts) =>{
      let cards= [];
    posts.forEach((post) =>{
        cards.push(
            {
                header:{
                    title: post.title
                }, 
                body:{
                    content: post.custom_excerpt,
                    isIconDisabled: true
                },
                url: post.url
            }
        )
    })
    return cards;
  }