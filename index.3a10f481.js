const i=new class{constructor(){this.gridSize=4,this.grid=this.createEmptyGrid(),this.score=0}createEmptyGrid(){return Array.from({length:this.gridSize},()=>Array(this.gridSize).fill(null))}addRandomTile(){let i=[];for(let e=0;e<this.gridSize;e++)for(let t=0;t<this.gridSize;t++)null===this.grid[e][t]&&i.push({row:e,col:t});if(i.length>0){let{row:e,col:t}=i[Math.floor(Math.random()*i.length)];this.grid[e][t]=.9>Math.random()?2:4}}isFull(){for(let i=0;i<this.gridSize;i++)for(let e=0;e<this.gridSize;e++)if(null===this.grid[i][e])return!1;return!0}reset(){this.grid=this.createEmptyGrid(),this.score=0,this.addRandomTile(),this.addRandomTile()}move(i){let e=!1,t=[];for(let i=0;i<this.gridSize;i++)t[i]=Array(this.gridSize).fill(!1);let r=(i,r,s,d)=>{null===this.grid[s][d]?(this.grid[s][d]=this.grid[i][r],this.grid[i][r]=null,e=!0):this.grid[s][d]!==this.grid[i][r]||t[s][d]||(this.grid[s][d]*=2,this.score+=this.grid[s][d],this.grid[i][r]=null,t[s][d]=!0,e=!0)},s=i=>{for(let e=0;e<this.gridSize;e++)if(null!==this.grid[i][e]){let t=e;for(;t>0;)(null===this.grid[i][t-1]||this.grid[i][t-1]===this.grid[i][t])&&r(i,t,i,t-1),t--}},d=i=>{for(let e=0;e<this.gridSize;e++)if(null!==this.grid[e][i]){let t=e;for(;t>0;)(null===this.grid[t-1][i]||this.grid[t-1][i]===this.grid[t][i])&&r(t,i,t-1,i),t--}};if("up"===i)for(let i=0;i<this.gridSize;i++)d(i);else if("down"===i){for(let i=0;i<this.gridSize;i++)for(let e=this.gridSize-1;e>=0;e--)if(null!==this.grid[e][i]){let t=e;for(;t<this.gridSize-1;)(null===this.grid[t+1][i]||this.grid[t+1][i]===this.grid[t][i])&&r(t,i,t+1,i),t++}}else if("left"===i)for(let i=0;i<this.gridSize;i++)s(i);else if("right"===i){for(let i=0;i<this.gridSize;i++)for(let e=this.gridSize-1;e>=0;e--)if(null!==this.grid[i][e]){let t=e;for(;t<this.gridSize-1;)(null===this.grid[i][t+1]||this.grid[i][t+1]===this.grid[i][t])&&r(i,t,i,t+1),t++}}e&&this.addRandomTile()}hasWon(){for(let i=0;i<this.gridSize;i++)for(let e=0;e<this.gridSize;e++)if(2048===this.grid[i][e])return!0;return!1}isGameOver(){if(!this.isFull())return!1;for(let i=0;i<this.gridSize;i++)for(let e=0;e<this.gridSize;e++)if(e<this.gridSize-1&&this.grid[i][e]===this.grid[i][e+1]||i<this.gridSize-1&&this.grid[i][e]===this.grid[i+1][e])return!1;return!0}getGrid(){return this.grid}getScore(){return this.score}},e=document.querySelector(".start"),t=document.querySelector(".game-field"),r=document.querySelector(".game-score"),s=document.querySelector(".message-start"),d=document.querySelector(".message-win"),l=document.querySelector(".message-lose"),h=()=>{let e=i.getGrid();for(let i=0;i<e.length;i++)for(let r=0;r<e[i].length;r++){let s=t.rows[i].cells[r],d=e[i][r];s.textContent=d||"",s.className="field-cell",d&&s.classList.add(`field-cell--${d}`)}r.textContent=i.getScore()},o=()=>i.hasWon()?(d.classList.remove("hidden"),!0):!!i.isGameOver()&&(l.classList.remove("hidden"),!0);e.addEventListener("click",()=>{i.reset(),h(),s.classList.add("hidden"),d.classList.add("hidden"),l.classList.add("hidden")}),document.addEventListener("keydown",e=>{let t=e.key;"ArrowUp"===t?i.move("up"):"ArrowDown"===t?i.move("down"):"ArrowLeft"===t?i.move("left"):"ArrowRight"===t&&i.move("right"),h(),o()});
//# sourceMappingURL=index.3a10f481.js.map
