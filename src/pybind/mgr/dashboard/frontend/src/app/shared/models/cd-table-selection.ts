export class CdTableSelection {
  selected: any[] = [];
  hasMultiSelection: boolean;
  hasSingleSelection: boolean;
  hasSelection: boolean;
  osdIds = []

  constructor() {
    this.update();
  }

  /**
   * Recalculate the variables based on the current number
   * of selected rows.
   */
  update() {
    this.hasSelection = this.selected.length > 0;
    this.hasSingleSelection = this.selected.length === 1;
    this.hasMultiSelection = this.selected.length > 1;
    
  }

  /**
   * Get the first selected row.
   * @return {any | null}
   */
  
  first() {
    return this.hasSelection ? this.selected[0] : null;
  }
 
 getIds() {
    let osdIds: number[] = [];
    if (this.hasSelection)
    {  
	    for (let row of this.selected){ 
	      osdIds.push(row.id)
	    }
	    return osdIds;
    }
  }

}