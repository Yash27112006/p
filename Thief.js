class Thief{
    constructor(){
        this.name = null;
        this.age = 0;
        this.gender = null;
        //this.imagePath = null;
        this.addressOfLastCrime = null;
    }
    getCount(){
      var thiefCountRef = database.ref('Records/thiefCount');
        thiefCountRef.on("value",(data)=>{
            thiefCount = data.val();
        });
      }
    
      updateCount(count){
        database.ref('/').update({
            thiefCount: count
        });
      }

      update(){
        var thiefIndex = "Records/Thief/Thief" + this.index;
        database.ref(thiefIndex).set({
          Name:this.name,
          Age:this.age,
          Gender:this.gender,
       //   imagePath:this.imagePath,
          addressOfLastCrime:this.addressOfLastCrime
        });
      }
    
      static async getThiefInfo(){
        await database.ref('Records/Thief')
        .once("value").then((data)=>{
          allThieves = data.val();
        });
}
}