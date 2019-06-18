import { Injectable } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBan,
  faBolt,
  faCalendarAlt,
  faCheck,
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faCogs,
  faEdit,
  faExclamationTriangle,
  faFileArchive,
  faFileExcel,
  faFileImport,
  faFilePdf,
  faFilter,
  faFlag,
  faInfoCircle,
  faListAlt,
  faPenSquare,
  faPlusCircle,
  faPowerOff,
  faQuestionCircle,
  faSpinner,
  faSyncAlt,
  faTimes,
  faTrashAlt,
  faUserAlt,
  faCheckSquare,
  faSquare
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {}
  static initFaIcons(): void {
    library.add(faTrashAlt, faEdit, faCheckSquare, faSquare);
  }
}
