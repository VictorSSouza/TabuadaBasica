function calcular(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('ERRO')
    }else{
        let numA = Number(num.value)

        let cont = 1;
        tab.innerHTML = ''
        while(cont <= 10){
            let item = document.createElement('option')
            item.text = `${numA} x ${cont} = ${numA * cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++;
        }

    }


}

