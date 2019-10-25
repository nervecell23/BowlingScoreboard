// const BowlingBoard = require('../lib/bowlingBoard.js')

describe("BowlingBoard", ()=>{

  describe("#calculateTotal", ()=>{
    it("produces correct total score", ()=>{
      subject = new BowlingBoard();

      testFrame = new Frame();
      testFrame.score.push(10);
      testFrame.bonus.push(3);
      testFrame.bonus.push(7);
      testFrame2 = new Frame();
      testFrame2.score.push(3);
      testFrame2.score.push(7);
      testFrame2.bonus.push(5);

      subject.frameList.push(testFrame);
      subject.frameList.push(testFrame2);

      expect(subject.calculateTotal()).toEqual(35);
    });
  });

  describe("#updateBonus", ()=>{
    it("does not update bonus when current frame is 'normal'", ()=>{
      subject = new BowlingBoard();
      var doubleFrame = {
        score: [2, 3],
        result: "normal",
        bonus: [],
        setBonus: ()=>{}
      };

      spyOn(doubleFrame, "setBonus");
      subject.frameList.push(doubleFrame);
      subject.frameList.push(doubleFrame);
      subject.updateBonus();
      expect(subject.frameList[0]["bonus"]).toEqual([]);
    });

    it("updates bonus once when current frame is 'spare'", ()=>{
      subject = new BowlingBoard();
      var doubleFrame = {
        score: [3, 7],
        result: "spare",
        bonus: [],
        setBonus: (value)=>{
          subject.frameList[0]['bonus'].push(value);
        }
      };

      var doubleFrame2 = {
        score: [2, 5],
        result: "normal"
      };

      spyOn(doubleFrame, "setBonus").and.callThrough();

      subject.frameList.push(doubleFrame);
      subject.frameList.push(doubleFrame2);
      subject.updateBonus();
      expect(subject.frameList[0]["bonus"]).toEqual([2]);
      expect(doubleFrame.setBonus).toHaveBeenCalledTimes(1);
    });

    it("updates bonus once when current frame is 'strike'", ()=>{
      subject = new BowlingBoard();
      var doubleFrame = {
        score: [10],
        result: "strike",
        bonus: [],
        setBonus: (value)=>{
          subject.frameList[0]['bonus'].push(value);
        }
      };

      var doubleFrame2 = {
        score: [2, 5],
        result: "normal"
      };

      spyOn(doubleFrame, "setBonus").and.callThrough();

      subject.frameList.push(doubleFrame);
      subject.frameList.push(doubleFrame2);
      subject.updateBonus();
      expect(subject.frameList[0]["bonus"]).toEqual([2, 5]);
      expect(doubleFrame.setBonus).toHaveBeenCalledTimes(2);
    });
  });

  describe("#whichFrameAndRoll", ()=>{
    var doubleFrame, subject, txt;

    it("display correct title for final frame roll #1", ()=>{
      doubleFrame = {
        score: [],
        result: "normal"
      }

      subject = new BowlingBoard();
      for(var i = 0; i < 10; i++){
        subject.frameList.push(doubleFrame);
      }
      subject.currentFrame = subject.frameList[9];
      txt = subject.whichFrameAndRoll();
      expect(txt).toBe("Frame #10 Roll #1");
    });

    it("display correct title for final frame with strike", ()=>{
      doubleFrame = {
        score: [10],
        result: "strike"
      }

      subject = new BowlingBoard();
      for(var i = 0; i < 10; i++){
        subject.frameList.push(doubleFrame);
      }
      subject.currentFrame = subject.frameList[9];
      txt = subject.whichFrameAndRoll();
      expect(txt).toBe("Frame #10 Bonus roll #1");
    });

    it("display correct title for final frame with spare", ()=>{
      doubleFrame = {
        score: [3,7],
        result: "spare"
      }

      subject = new BowlingBoard();
      for(var i = 0; i < 10; i++){
        subject.frameList.push(doubleFrame);
      }
      subject.currentFrame = subject.frameList[9];
      txt = subject.whichFrameAndRoll();
      expect(txt).toBe("Frame #10 Bonus roll #1");
    });
  });

});
