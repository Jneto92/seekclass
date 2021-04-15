<template>
  <div class="tabela-horario">
    <PageTitle icon="fa fa-table" main="Grade Horaria" sub="Horários" />
    

    <div class="table is-bordered">
      <table class="table">
        <thead>
          <tr>
            <th><abbr title="Horário">Horário</abbr></th>
            <th><abbr title="Terça">Segunda</abbr></th>
            <th><abbr title="Quarta">Terça</abbr></th>
            <th><abbr title="Quinta">Quarta</abbr></th>
            <th><abbr title="Sexta">Quinta</abbr></th>
            <th><abbr title="Sábado">Sexta</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>14h às 15h</th>
            <td>1</td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>15h às 16h</th>
            <td>1</td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>16h às 17h</th>
            <td>1</td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>17h às 18h</th>
            <td>1</td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
export default {
  name: "TabelaHorario",
  components: {
    PageTitle
  }
};
</script>

<style scoped>
</style>