import React from 'react';
import {Menuitems} from './Menuitems.js'
import './App.css';


export default class navbar extends React.Component{
  state = {
     on : false
   }


   Handle = () => ( 
    this.setState({
      
    
      on: !this.state.on
    })
  )
  
   render(){
    return(
     <>
      <nav className= "navbar-items">
         <h1 className= "navbar-logo">Mrdc</h1>
         <div className= "menu-icon" onClick= {this.Handle }>
           <i className= {this.state.on ? 'fas fa-bars' : 'fas fa-bars'}></i>
         </div>
         <ul className= {this.state.on ? 'nav-menu active' : 'nav-menu'}>
           {
             Menuitems.map((item,idx)=>
              <li key= {item.idx}>
                <a href={item.url} className= {item.cName}
                >{item.name}</a>
              </li>
              )
           }
         </ul>
      </nav>
      <div>
      Wikipedia was launched on January 15, 2001, by Jimmy Wales and Larry Sanger; Sanger coined its name as a portmanteau of "wiki" and "encyclopedia".[7][8] Initially available only in English, versions in other languages were quickly developed. The English Wikipedia, with 6.3 million articles as of March 2021, is the largest of the 321 language editions. Combined, Wikipedia's editions comprise more than 56 million articles, and attract more than 17 million edits and more than 1.7 billion unique visitors per month.[9][10]

Wikipedia has been criticized for its uneven accuracy and for exhibiting systemic bias, particularly gender bias, with the majority of editors being male.[11] In 2006, Time magazine stated that the open-door policy of allowing anyone to edit had made Wikipedia the "biggest and perhaps the best encyclopedia in the world", and a testament to the vision of Jimmy Wales.[12] The project's reputation improved further in the 2010s, as it received praise for its unique structure, culture, and absence of commercial bias.[3][11] In 2018, Facebook and YouTube announced that they would help users detect fake news by suggesting links to related Wikipedia articles.[13]

      </div>
      <p>
      Wikipedia is not a reliable source. Wikipedia can be edited by anyone at any time. This means that any information it contains at any particular time could be vandalism, a work in progress, or just plain wrong. Biographies of living persons, subjects that happen to be in the news, and politically or culturally contentious topics are especially vulnerable to these issues. Edits on Wikipedia that are in error may eventually be fixed. However, because Wikipedia is a volunteer-run project, it cannot monitor every contribution all the time. There are many errors that remain unnoticed for days, weeks, months, years, or even for a decade. Therefore, Wikipedia should not be considered a definitive source in and of itself.

The same applies to Wikipedia's sister projects, as well as websites that mirror or use it as a source themselves, and printed books or other material derived primarily or entirely from Wikipedia articles.

Wikipedia generally uses reliable secondary sources, which vet data from primary sources. If the information on another Wikipedia page (which you want to cite as the source) has a primary or secondary source, you should be able to cite that primary or secondary source and eliminate the middleman (or "middle-page" in this case).
Always be careful of what you read: it might not be consistently accurate.
Neither articles on Wikipedia nor websites that mirror Wikipedia can be used as sources, because this is circular sourcing.
An exception to this is when Wikipedia is being discussed in an article, which may cite an article, guideline, discussion, statistic or other content from Wikipedia or a sister project as a primary source to support a statement about Wikipedia (while avoiding undue emphasis on Wikipedia's role or views, and inappropriate self-reference).
Articles are only as good as the editors who have been editing them—their interests, education and background—and the efforts they have put into a particular topic or article. Since we try to avoid original research, a particular article may only be as good as (a) the available and discovered reliable sources, and (b) the subject matter may allow. Since the vast majority of editors are anonymous, you have only their editing history and their user pages as benchmarks. Of course, Wikipedia makes no representation as to their truth. Further, Wikipedia is collaborative by nature, and individual articles may be the work of one or many contributors over varying periods. Articles vary in quality and content, widely and unevenly, and also depending on the quality of sources (and their writers, editors and publishers) that are referenced and/or linked. Circumstances may have changed since the edits were added.

It also helps to look at the article's editing history (it may have changed drastically over time; you can identify individual contributions and their contributors by user name), and the article's talk page (to see controversies and development).

To be sure, Wikipedia is a good springboard from which to launch your ow
</p>
     </>
   )
    
  }
}

