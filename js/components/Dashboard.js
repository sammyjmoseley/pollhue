import React from "react";

// import PieChart from "./PieChart";

import toastr from 'toastr';
import PieChart from "./PieChart";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "num_understand" : 0,
      "num_misunderstand" : 0
    };

    let success = function(json){
      this.setState((prev_state) => {
        return {
          num_understand: json.num_understand,
          num_misunderstand: json.num_misunderstand
        }

      });
    };

    let poll_refresh = () => {
      $.get("/vote/results",
          success.bind(this)
      );
    };

    $(document).ready(function() {
      setInterval(poll_refresh.bind(this),1000);
    });


  }


  vote(is_confused) {
    window.$
        .post('/vote', {
              is_confused: is_confused
            },
            function () {
              toastr.success('Vote success!')
            })
        .fail(
            function() {
              toastr.error('Vote failure!')
            }
        );
  }


  render() {
    return (
        <div>
          <PieChart data={[["Task","Hours per Day"],['u', this.state.num_understand], ['uu', this.state.num_misunderstand]]}/>
          <div className="row">
            <div className={"col s6"}>
              <a className="waves-effect waves-light btn" onClick={() => this.vote.bind(this)(false)}>I am understand :-)</a>
            </div>

            <div className={"col s6"}>
              <a className="waves-effect waves-light btn" onClick={() => this.vote.bind(this)(true)}>I am confused!</a>
            </div>
          </div>
        </div>
    );
  }
};