import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseDialogComponent} from 'base-dialog';
import { Subject } from 'rxjs..'

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public open(title:string){
    const result = <IBaseDialogRef>{
      onOk: new Subject(),
      onCancel: new Subject()
    }
    this.dialog.open(BaseDialogComponent, {data: 
    {title: title,
    results: result}
    });

    return result;
  }

}

export class IBaseDialogRef {
  onOk: Subject;
  onCancel: Subject;
}


