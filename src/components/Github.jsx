import "./style/Github.scss"

const Github=()=>{
    return(
        <div className="git">
          <h1 className="kill">   GITHUB STATS</h1> 
         <div className="stack">
            <div>
            <img   width="560px"  className="dark" src="https://github-readme-stats.vercel.app/api?username=AlishaMohasin&theme=dark&hide_border=false&include_all_commits=true&count_private=true" />
            </div>
         <div>
            <img width="560px"   className="dark" src="https://github-readme-streak-stats.herokuapp.com/?user=AlishaMohasin&theme=dark&hide_border=false"/>
        </div>
         </div>

            <div className="used">
            <img width="560px" className="dark" src="https://github-readme-stats.vercel.app/api/top-langs/?username=AlishaMohasin&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"/>
            </div>
        </div>  
    )
}
export default Github