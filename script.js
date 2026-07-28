let foods = [];

function addFood(){

    const name = document.getElementById("food").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if(name==="" || date===""){
        alert("入力してください");
        return;
    }

    foods.push({
        name:name,
        category:category,
        date:date
    });

    showFoods();

    document.getElementById("food").value="";
    document.getElementById("date").value="";
}

function showFoods(){

    const list=document.getElementById("list");

    list.innerHTML="";

    const today=new Date();

    foods.forEach((food,index)=>{

        const limit=new Date(food.date);

        const diff=Math.ceil((limit-today)/(1000*60*60*24));

        let cls="safe";

        let text="余裕あり";

        if(diff<=3 && diff>=0){
            cls="warning";
            text="期限が近い";
        }

        if(diff<0){
            cls="danger";
            text="期限切れ";
        }

        list.innerHTML+=`
        <div class="item ${cls}">
        <h3>${food.name}</h3>

        <p>カテゴリー：${food.category}</p>

        <p>賞味期限：${food.date}</p>

        <p>残り ${diff} 日</p>

        <strong>${text}</strong>

        <button class="delete" onclick="deleteFood(${index})">
        削除
        </button>

        </div>
        `;
    });

}

function deleteFood(index){

    foods.splice(index,1);

    showFoods();

}
