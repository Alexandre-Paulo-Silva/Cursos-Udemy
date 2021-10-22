import junit.framework.Testecase;


public class TestePessoa extends Testecase {


    public void testeobterNomeCompleto(){

        pessoa p = new Pessoa("fulano","Tal");
        asserEquals("Fulano Tal",p.getNomeCompleto());
    }
}

