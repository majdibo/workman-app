import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {subForm} from '../../utils';

import 'codemirror/lib/codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';

import 'codemirror/mode/sql/sql';
import 'codemirror/addon/hint/sql-hint';

import * as CodeMirror from 'codemirror';

import {AbstractValueComponent} from '../abstract-value-component';

@Component({
  selector: 'mw-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [subForm(EditorComponent)],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent extends AbstractValueComponent implements AfterViewInit, OnInit {
  options = {
    lineNumbers: true,
    extraKeys: {'Ctrl-Space': 'autocomplete'},
    autoCloseBrackets: true,
    matchBrackets: true
  };

  @Input() parameters = [];
  @Input() language :string = 'sql';
  setDisabledState(isDisabled: boolean) {
    super.setDisabledState(isDisabled);
    this.options['readOnly'] = isDisabled ? 'nocursor' : false;
  }

  ngAfterViewInit(): void {

    const orig = CodeMirror['hint'].sql;
    CodeMirror['hint'].sql = cm => {
      let cursor = cm.getCursor();

      let inner = orig(cm) || {from: cursor, to: cursor, list: []};

      const getWord = () => {
        let cursorLine = cm.getLine(cursor.line);
        let start = cursor.ch;
        let end = start;
        while (end < cursorLine.length && /[\w$]/.test(cursorLine.charAt(end))) ++end;
        while (start && /[\w$]/.test(cursorLine.charAt(start - 1))) --start;

        return start !== end && cursorLine.slice(start, end);
      };

      inner.list.unshift(...this.parameters.filter(item => item.match(new RegExp('^' + getWord(), 'i'))).sort());

      return inner;
    };

  }

  ngOnInit(): void {
    this.options['mode'] = this.language
  }

}

