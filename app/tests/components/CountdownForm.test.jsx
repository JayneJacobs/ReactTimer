var expect = require('expect');
var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });


    it('should call onSetCountdown if valid seconds entered', () => {
      var spy = expect.createSpy();
      var countdownForm = TestUtils.renderIntroDocument(<CountdownForm onSetCountdown={spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownForm));

      countdownForm.refs.seconds.value = '109';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledwith(109);


      });

      it('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntroDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109b';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalledwith();


        });

  });
