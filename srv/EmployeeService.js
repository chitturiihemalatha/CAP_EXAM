
module.exports = cds.service.impl( async function(){
 
    const { EmployeeSet} = this.entities;
    this.before('CREATE',EmployeeSet,(req) => {
        var salary = parseInt(req.data.salaryAmount);
        var curr = req.data.Currency_code;
        if((salary <= 50000) && (curr==='USD') ){
            req.error('‘Employee’s salary must be less than 50000 USD');
        }
        
    })
    this.after('CREATE', EmployeeSet, (each) => {
        console.log('Create Operation Successful');
        each.message = 'Create Operation Successful';
    });
    this.before('UPDATE', EmployeeSet, async (req) => {
        const salary = parseInt(req.data.salaryAmount);
        const curr = req.data.Currency_code;
        if (salary <= 50000 && curr === 'USD') {
            req.error('Employee’s salary must be greater than 50000 USD');
        }
        const oldData = await SELECT.one.from(EmployeeSet).where({ ID: req.data.ID });
        if (oldData && (req.data.nameFirst !== oldData.nameFirst || req.data.loginName !== oldData.loginName)) {
            req.error('Operation not allowed');
        }
    });
    this.after('UPDATE', EmployeeSet, (each) => {
        console.log('Update operation successful');
        each.message = 'Update Operation Successful';
        return each;
    });
    this.before('DELETE', EmployeeSet, async (req) => {
        
        const employee = await SELECT.one.from(EmployeeSet).where({ ID: req.data.ID });

        if (employee && employee.nameFirst.startsWith('S')) {
            req.error('Deletion not allowed for employees with nameFirst starting with S');
        }
    });

    
    this.after('DELETE', EmployeeSet, (each) => {
        console.log('Delete operation successful');
        
        each.message = 'Delete Operation Successful';
        return each;
    });
});