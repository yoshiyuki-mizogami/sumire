interface DayData{

}

export default class ADayCls {
  public day : Date
  public data : DayData
  constructor(d: Date, dd: DayData){
    this.day = d
    this.data = dd
  }
}